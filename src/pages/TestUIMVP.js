import React from 'react';
import { Row, Col, Container} from "reactstrap";
import {Box, Button, Grid, IconButton, Menu, MenuItem, Card}from '@material-ui/core'; 
import logo from '../cpa_full_logo.gif';
import {Image, Dropdown, DropdownButton} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import UploadHandler from '../classes/UploadHandler'
import {ClassifierManager} from '../classes/ClassifierManager'
import {ImageProvider} from '../classes/ImageProvider.js';
import UserUploadFileHandler from '../classes/UserUploadFileHandler'
import {Classifier} from '../classes/Classifier'
import {ImageGridManager}  from '../classes/imGridManager'

import {
    GridContextProvider,
    GridDropZone,
    GridItem,
    swap,
    move
  } from "react-grid-dnd";
  
  import "../dndstyles.css";



function TestUIMVP(){
    
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [dataProvider, setDataProvider] = React.useState(null)

    // var classifierManager = null;
    // const [classifierManager, setClassifierManager] = React.useState(null)
    const [trainingObject, setTrainingObject] = React.useState(null)
    const [userUploadFileHandler, setUserUploadFileHandler] = React.useState(null)
    const [tileState, setTileState] = React.useState( constructTileState([]) );
    const [imageGridManager, setImageGridManager] = React.useState(null)
    const [lastFetchState, setLastFetchState] = React.useState(null)
    const [featuresToUse, setFeaturesToUseState] = React.useState(null)

    const [fetchButtonEnabled, setFetchButtonEnabled] = React.useState(false)
    const [trainButtonEnabled, setTrainButtonEnabled] = React.useState(false)
    const [evaluateButtonEnabled, setEvaluateButtonEnabled] = React.useState(false)
    const [downloadButtonEnabled, setDownloadButtonEnabled] = React.useState(false)
    const [uploadButtonEnabled, setUploadButtonEnabled] = React.useState(true)
    const N = 20

    const handleClickFetchDropDown = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseFetchDropDown = (fetchType) => {
        setAnchorEl(null);
        if (fetchType !== undefined) {
            handleFetch(fetchType)
        }
    };

    const disableIterationButtons = () => {
      setFetchButtonEnabled(false)
      setTrainButtonEnabled(false)
      setDownloadButtonEnabled(false)
    }
    const enableIterationButtons = () => {
      setFetchButtonEnabled(true)
      setTrainButtonEnabled(true)
      setDownloadButtonEnabled(true)
    }

    const handleFetch = async (fetchType) => {

      disableIterationButtons()
        const emptyTileState = { unclassified: [], positive: [], negative: []}
        setTileState(emptyTileState)
        const classifierManager = new ClassifierManager(dataProvider, trainingObject)
        await classifierManager.initTrainPromise()

        setLastFetchState(fetchType)
        console.log("fetch " + fetchType)
        const classedCellPairObjects = classifierManager.fetchUpToNCellPairsByClass(fetchType, N)
        const imageProvider = new ImageProvider();
        var dataURLPromiseArray = null;
        if (fetchType === "random") {
            const dataURLPromiseArray = classedCellPairObjects.map(CellPair => {
                const channelFileNames = dataProvider.returnAllImgFileNames(CellPair.ImageNumber)
                const channelFiles = channelFileNames.map(name => { //Alternatively, we could have this.dp.returnAllImgPromisesPerImg({'ImageNumber': 2}, fh)
                    return userUploadFileHandler.findFile(name)       // and abstract from 8-17 or more
                })
                const promiseImages = channelFiles.map(file => {
                    const promiseImage =  userUploadFileHandler.fileReaderPromiseImage(file)
                    return promiseImage;    
                })
                return Promise.all(promiseImages)
                    .then(images => {
                        const coords = dataProvider.getCordsforCellDisplay(CellPair)
                        return imageProvider.getDataURLPromise(images, coords);   //The only method of imageprovider. If cords is left blank, it will produce a whole image. Should be
                    })                                                //static class or function
            })
            const dataURLs = await Promise.all(dataURLPromiseArray)
            const newTileState = constructTileState(dataURLs)
            setTileState(newTileState)
            console.log(newTileState)
            console.log(dataURLs)
            setImageGridManager(new ImageGridManager(classedCellPairObjects, dataURLs))

            
            enableIterationButtons()
            return
        } 

        if (fetchType === "positive") {
          dataURLPromiseArray = classedCellPairObjects.map(CellPair => {
            const channelFileNames = dataProvider.returnAllImgFileNames(CellPair.ImageNumber)
            const channelFiles = channelFileNames.map(name => { //Alternatively, we could have this.dp.returnAllImgPromisesPerImg({'ImageNumber': 2}, fh)
                return userUploadFileHandler.findFile(name)       // and abstract from 8-17 or more
            })
            const promiseImages = channelFiles.map(file => {
                const promiseImage =  userUploadFileHandler.fileReaderPromiseImage(file)
                return promiseImage;    
            })
            return Promise.all(promiseImages)
                .then(images => {
                    const coords = dataProvider.getCordsforCellDisplay(CellPair)
                    return imageProvider.getDataURLPromise(images, coords);   //The only method of imageprovider. If cords is left blank, it will produce a whole image. Should be
                })                                                //static class or function
        })
        
        const dataURLs = await Promise.all(dataURLPromiseArray)
        const newTileState = constructTileState(dataURLs)
        setTileState(newTileState)
        console.log(newTileState)
        console.log(dataURLs)
        setImageGridManager(new ImageGridManager(classedCellPairObjects, dataURLs))
        enableIterationButtons()
        return
      }

      if (fetchType === 'negative') {
        dataURLPromiseArray = classedCellPairObjects.map(CellPair => {
          const channelFileNames = dataProvider.returnAllImgFileNames(CellPair.ImageNumber)
          const channelFiles = channelFileNames.map(name => { //Alternatively, we could have this.dp.returnAllImgPromisesPerImg({'ImageNumber': 2}, fh)
              return userUploadFileHandler.findFile(name)       // and abstract from 8-17 or more
          })
          const promiseImages = channelFiles.map(file => {
              const promiseImage =  userUploadFileHandler.fileReaderPromiseImage(file)
              return promiseImage;    
          })
          return Promise.all(promiseImages)
              .then(images => {
                  const coords = dataProvider.getCordsforCellDisplay(CellPair)
                  return imageProvider.getDataURLPromise(images, coords);   //The only method of imageprovider. If cords is left blank, it will produce a whole image. Should be
              })                                                //static class or function
      })
      
      const dataURLs = await Promise.all(dataURLPromiseArray)
      const newTileState = constructTileState(dataURLs)
      setTileState(newTileState)
      console.log(newTileState)
      console.log(dataURLs)
      setImageGridManager(new ImageGridManager(classedCellPairObjects, dataURLs))
      enableIterationButtons()
      return
    }
    
  }

  const handleTrain = async () => {

    disableIterationButtons()

      const negativeIDs = tileState.negative.map(item => item.id)
      const positiveIDs = tileState.positive.map(item => item.id)
      console.log(negativeIDs, tileState)
      imageGridManager.setClassByIndexArray('negative', negativeIDs)
      imageGridManager.setClassByIndexArray('positive', positiveIDs)

      const negativeCellPairs = imageGridManager.getPairsByClass('negative')
      const positiveCellPairs = imageGridManager.getPairsByClass('positive')
 
      const negativeObjectDataRows = negativeCellPairs.map(cellPair => dataProvider.getRow('object_data', {ImageNumber: cellPair.ImageNumber, ObjectNumber: cellPair.ObjectNumber}))
      const positiveObjectDataRows = positiveCellPairs.map(cellPair => dataProvider.getRow('object_data', {ImageNumber: cellPair.ImageNumber, ObjectNumber: cellPair.ObjectNumber}))
      const trainingDataAddition = [...negativeObjectDataRows, ...positiveObjectDataRows]

      const negativeLabels = new Array(negativeObjectDataRows.length).fill(0)
      const positiveLabels = new Array(positiveObjectDataRows.length).fill(1)
      const trainingLabelsAddition = negativeLabels.concat(positiveLabels)

      const UpdatedTrainingObject = {
        classifierType: "LogisticRegression",
        trainingData: [...trainingDataAddition, ...trainingObject.trainingData],
        trainingLabels: [...trainingLabelsAddition, ...trainingObject.trainingLabels],
        featuresToUse: featuresToUse
      }
      console.log(UpdatedTrainingObject)
      setTrainingObject(UpdatedTrainingObject)
      // const newClassifierManager = new ClassifierManager(dataProvider, UpdatedTrainingObject)
      
      
      // setClassifierManager(newClassifierManager)

      const clearedTileState = { unclassified: tileState.unclassified, positive: [], negative: []}
      setTileState(clearedTileState)
      console.log("finished train")
      enableIterationButtons()
    
  }

    const handleUpload = async (eventObject) => {
        setUploadButtonEnabled(false)
        const userUploadFileHandler = new UserUploadFileHandler(eventObject)
        setUserUploadFileHandler(userUploadFileHandler)

        const uploadHandler = new UploadHandler(eventObject)
        const uploadReturnObject = await uploadHandler.getDataHandlerandStartingTrainingSet();

        const dataProvider = uploadReturnObject.data_provider
        setDataProvider(dataProvider)
        const trainingTable = uploadReturnObject.training_data.training_table
        const trainingDataTable = trainingTable.getDataColumnsPaired()

        const trainingLabels = trainingTable.getTrainingLabels()
        const initialTrainingData = trainingDataTable.map(row_object => {
            const ObjectNumber = row_object['objectnum']
            const ImageNumber = row_object['imagenum']
            return dataProvider.getRow('object_data', {ObjectNumber, ImageNumber})
        })
        const totalFeatures = uploadReturnObject.training_data.features
        const tempFeaturesToUse = totalFeatures.filter((elem)=>!elem.includes("Location") && (elem !== "ObjectNumber") && (elem !== "ImageNumber"))
        setFeaturesToUseState(tempFeaturesToUse)
        console.log("finished data initialization")
        const initialTrainingObject = {
            classifierType: "LogisticRegression",
            trainingData: initialTrainingData,
            trainingLabels: trainingLabels,
            featuresToUse: tempFeaturesToUse
        }
        setTrainingObject(initialTrainingObject)
        // console.log("starting initial training")
        // const newClassifierManager = new ClassifierManager(dataProvider, initialTrainingObject)
        
        // setClassifierManager(newClassifierManager)

        setFetchButtonEnabled(true)
        setTrainButtonEnabled(true)
        setDownloadButtonEnabled(true)
        
        
        console.log("finished upload")
    }

    const handleDownload = async () => {
      disableIterationButtons()
      const classifierManager = new ClassifierManager(dataProvider, trainingObject)
      await classifierManager.initTrainPromise()
      classifierManager.userDownloadClassifierSpecPromise()
      enableIterationButtons()
    }

    
    function constructTileState(dataURLs) {
        return {
            unclassified: dataURLs.map((dataURL, idx, info) => {return {id: idx, address: dataURL, info: "cell info, biology stuff"}}),  
            positive: [],
            negative: []
        };
    }

    function onChange(sourceId, sourceIndex, targetIndex, targetId) {
        if (targetId) {
          const result = move(
            tileState[sourceId],
            tileState[targetId],
            sourceIndex,
            targetIndex
          );
          return setTileState({
            ...tileState,
            [sourceId]: result[0],
            [targetId]: result[1]
          });
        }
    
        const result = swap(tileState[sourceId], sourceIndex, targetIndex);
        return setTileState({
          ...tileState,
          [sourceId]: result
        });
      }
    


    return (

        <GridContextProvider onChange={onChange}>
        <div style={{ overflowX:"hidden", resize: "none"}}>
    
        <Row>
        <Image src={logo} style={{marginLeft:"10%", height:"30%", width:"25%",position:"relative", maxHeight:"125px", marginBottom:"1%"}}></Image>
       
        <Col >
        <IconButton disabled={!downloadButtonEnabled} onClick={handleDownload} style={{color: "black", position:"relative", left:"70%"}}> <SaveAltIcon /></IconButton> 
        </Col>
   
       
        </Row>
        <Row>
        
        <Grid container justify="center" spacing={2} style={{marginBottom: 15}}>
       
        <Grid key={0} item>
            <Button disabled={!fetchButtonEnabled} variant="contained" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickFetchDropDown}>
            Fetch
            </Button>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseFetchDropDown}
            >
            <MenuItem onClick={()=>handleCloseFetchDropDown("random")}>Random</MenuItem>
            <MenuItem onClick={()=>handleCloseFetchDropDown("positive")}>Positive</MenuItem>
            <MenuItem onClick={()=>handleCloseFetchDropDown("negative")}>Negative</MenuItem>
            </Menu>
    </Grid>


        <Grid key={1} item>
            {/* style = {{height: "5vw", width:"10vw", minHeight:2, maxHeight: 35, maxwidth: 50, fontSize: "max(1.5vw, 20)"}}  */}
        <Button disabled={!trainButtonEnabled} variant="contained" onClick={handleTrain}>Train</Button>
        </Grid>

        <Grid key={2} item>
        <Button disabled={!evaluateButtonEnabled} variant="contained" onClick={()=>{}}>Evaluate</Button>
        </Grid>
        <Grid key={4} item>
        <Button disabled={!uploadButtonEnabled} variant="contained" component="label" onClick={()=>console.log("Upload!")}> 
            Upload
            <input  type="file"
                    hidden webkitdirectory="true"
                    mozdirectory="true"
                    msdirectory="true"
                    odirectory="true"
                    directory="true"
                    multiple
                    onChange = {(eventObject)=>{handleUpload(eventObject)}}   
            />
        </Button>
        </Grid>
    </Grid>
    </Row>

  
        <div>
        
        <label style = {{textAlign:"left", backgroundColor: 'white', paddingLeft: "10%", marginBottom:"0.5%", userSelect: "none"} }>Unclassified </label>
        
        <GridDropZone
             className="dropzone "
            id="unclassified"
            boxesPerRow={8}
            rowHeight={80}
            style={{height: "20vw", maxHeight: 200, minHeight:150, marginBottom:10, marginLeft: "10%", width:"80%"}}
          >
             
            {tileState.unclassified.map(item => (
              <GridItem className= "hoverTest"  style={{height:"10vw", width: "10vw", minHeight:80, minWidth: 80, maxHeight: 105, maxWidth: 105, padding:10}} key={item.id}>
                <div className="grid-item" >
                    <div className="grid-item-content" style = {{backgroundImage:  `url(${item.address})`}} >
                    <span className= "hoverText">{item.info}</span>
                        </div> 

                </div>
              </GridItem>
            ))}
          </GridDropZone>
  
        
        <Row>
     
          <label style = {{textAlign:"left", backgroundColor: 'white', paddingLeft: "11%", userSelect: "none", marginBottom:"0.5%", marginTop:0} }>Positive</label> 
    
        
          <label style = {{textAlign:"left", backgroundColor: 'white', paddingRight: "8%", userSelect: "none", margin: "auto",  marginBottom:"0.5%", marginTop:0} }>Negative</label>
       
          </Row>
         
         <Row>

          <GridDropZone
            className="dropzone positive"
            id="positive"
            boxesPerRow={4}
            rowHeight={80}
            style={{height: "20vw", maxHeight: 200, minHeight:150}}
          >
            
            {tileState.positive.map(item => (
              <GridItem className= "hoverTest" style={{height:"10vw", width: "10vw", minHeight: 80, minWidth: 80, maxHeight: 105, maxWidth: 105, padding:10}} key={item.id}>
                <div className="grid-item"> 
                    <div className="grid-item-content" style = {{backgroundImage: `url(${item.address})`}}>
                    <span className= "hoverText">{item.info}</span>
                        </div>  
                </div>
              </GridItem>
            ))}
          </GridDropZone>
   
      
          <GridDropZone
            className="dropzone negative"
            id="negative"
            boxesPerRow={4}
            rowHeight= {80}
            style={{height: "20vw", maxHeight: 200, minHeight:150}}
          >
            {tileState.negative.map(item => (
              <GridItem className= "hoverTest" style={{height:"10vw", width: "10vw", minHeight: 80, minWidth: 80, maxHeight: 105, maxWidth: 105, padding: 10}} key={item.address}>
                <div className="grid-item">
                <div className="grid-item-content" style = {{backgroundImage: `url(${item.address})`}}>
                <span className= "hoverText">{item.info}</span>
                        </div>      
                </div>
              </GridItem>
            ))}
          </GridDropZone>

     
      
        </Row>
        </div>
      
 
    </div>
    </GridContextProvider>

    );
}






export default TestUIMVP; 