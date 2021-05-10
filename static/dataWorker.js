//import UploadHandler
self.importScripts('UploadHandler.js');
// self.importScripts('UserUploadFileHandler.js')
self.initialized = false;

self.onmessage = async (event) => {
	switch (event.data.action) {
		case 'init':
			console.time('init');
			const { fileListObject } = event.data;
			if (fileListObject === undefined || fileListObject === null) {
				throw new Error('[dataWebWorker] fileListObject not defined');
			}
			self.fileHandler = new UserUploadFileHandler(fileListObject);
			const uploadHandler = new UploadHandler(event.data.fileListObject);
			const uploadReturnObject = await uploadHandler.getDataHandlerandStartingTrainingSet();
			self.dataProvider = uploadReturnObject.data_provider;

			const trainingTable = uploadReturnObject.training_data.training_table;
			const trainingDataTable = trainingTable.getDataColumnsPaired();
			const trainingLabels = trainingTable.getTrainingLabels();
			const initialTrainingData = trainingDataTable.map((row_object) => {
				const ObjectNumber = row_object['objectnum'];
				const ImageNumber = row_object['imagenum'];
				return dataProvider.getRowArray('object_data', { ObjectNumber, ImageNumber });
			});
			const totalFeatures = uploadReturnObject.training_data.features;

			const featureIsUsed = (feature) =>
				!feature.includes('Location') && feature !== 'ObjectNumber' && feature !== 'ImageNumber';
			const tempIndices = totalFeatures.map((feature, idx) => (featureIsUsed(feature) ? idx : -1));
			console.log(tempIndices, featureIsUsed('a'), featureIsUsed('Location'));
			const featureIndicesToUse = tempIndices.filter((index) => !(index === -1));
			console.log(featureIndicesToUse);
			self.initialTrainingObject = {
				classifierType: 'LogisticRegression',
				trainingData: initialTrainingData,
				trainingLabels,
				featureIndicesToUse,
			};

			self.postMessage(event.data);
			console.timeEnd('init');
			break;
		case 'connectToClassifierWorker':
			self.classifierWorkerPort = event.ports[0];
			self.classifierWorkerPort.onmessage = handleClassifierWorkerMessage;
			break;
		case 'connectToCanvasWorker':
			self.canvasWorkerPort = event.ports[0];
			self.canvasWorkerPort.onmessage = handleCanvasWorkerMessage;
			break;
		case 'testSendToClassifierWorker':
			self.classifierWorkerPort.postMessage({ test: 'test' });
			break;
		case 'printObjectDataRow':
			console.log(self.dataProvider.getObjectLines()[event.data.index]);
			break;
		// case "trainAndPredict":
		//     self.postMessage({action: "trainAndPredict", objectData:self.objectData})
		//     break;
		case 'sendObjectData':
			console.log('entry to dataworker, sendObjectData');
			self.postMessage({ action: 'sendObjectData', objectData: self.dataProvider.getDataLines('object_data') });
			break;
		case 'getObjectRow':
			const searchObject = { ObjectNumber: event.data.ObjectNumber, ImageNumber: event.data.ImageNumber };
			self.postMessage({
				action: 'sendObjectData',
				objectData: self.dataProvider.getRow('object_data', searchObject),
				uuid: event.data.uuid,
			});
			break;
		case 'getTrainingObject':
			self.postMessage({ trainingObject: self.initialTrainingObject });
			break;
		case 'get':
			const result = self.fulfillAction(event);
			self.postMessage({ getResult: result, uuid: event.data.uuid });
			break;
		default:
			console.log('unhandled event: ' + event.data);
	}
};

self.fulfillAction = function (event) {
	// console.log("fulfillAction enter")
	// console.log(event.data)
	switch (event.data.action) {
		case 'getObjectData':
			return self.dataProvider.getDataLines('object_data');
		case 'getObjectRow':
			const { ImageNumber, ObjectNumber } = event.data.cellPair;
			return self.dataProvider.getRow('object_data', { ImageNumber, ObjectNumber });
		case 'getTrainingObject':
			return self.initialTrainingObject;
		case 'get':
			switch (event.data.getType) {
				case 'coordsFromCellPair':
					const { cellPair } = event.data.getArgs;
					return self.dataProvider.getCoordsforCellDisplay(cellPair);
				case 'pathsObjectFromImageNumber':
					const { imageNumber } = event.data.getArgs;

					return self.dataProvider.returnAllImgFileNames(imageNumber);
				case 'fileFromFileName':
					const { fileName } = event.data.getArgs;
					return self.fileHandler.findFile(fileName);
				case 'trainingObject':
					return self.initialTrainingObject;
				case 'cellPairs':
					const { amount } = event.data.getArgs;
					const randomCellPairs = self.dataProvider.getNRandomObjs(amount);
					return randomCellPairs;
				case 'objectRowsFromCellpairs':
					const { cellPairs } = event.data.getArgs;
					return cellPairs.map((cellPair) => self.dataProvider.getRowArray('object_data', cellPair));
				case 'objectData':
					return self.dataProvider.getDataLines('object_data');
			}
		case 'test':
			return 'data test';
	}
};

const handleClassifierWorkerMessage = function (event) {
	console.log('data worker received classifier worker data');
	// console.log(event.data)

	switch (event.data.action) {
		case 'getObjectData':
			console.log('dataworker to classifierworker: fulfill getObjectData');
			self.classifierWorkerPort.postMessage({
				action: event.data.action,
				uuid: event.data.uuid,
				objectData: self.dataProvider.getDataLines('object_data'),
			});
			break;
		case 'get':
			const result = self.fulfillAction(event);
			self.classifierWorkerPort.postMessage({ getResult: result, uuid: event.data.uuid });
			break;
		// case "getObjectRow":
	}
};

const handleCanvasWorkerMessage = function (event) {
	const postResult = self.fulfillAction(event);
	// console.log("fulfillAction exit")
	const { uuid } = event.data;
	// console.log(postResult, uuid)
	self.canvasWorkerPort.postMessage({ postResult, uuid });
};
