import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AddFields from "../add-fields";
import UploadImageBox from "../upload-img-box";
import {InputField,RemovableInputField} from "../input-field/";
import { BUTTON_TYPE, DESCRIPTION_TYPE } from "../../utils/constants";
import { httpService } from "../../service-utils";
const AddSpamTemplate = () => {
  const [title,setTitle] = useState("");
  const [spamContent, setSpamContent] = useState([]);

  const createDescriptionEntityList = () =>{
    let descriptionList = [];
    spamContent.map((desc)=>{
      let newDesc = {
        descContent: desc.content,
        descType: desc.type,
        active: 1
    }
    descriptionList.push(newDesc);
    return newDesc
    })
    return descriptionList;
  }
  const createNewSpamObjectAndSave = () =>{
    let newSpamObject = {
      title: title,
      userAd : "",
      active : 1,
      descriptionEntityList : createDescriptionEntityList()
    };
    httpService('spam/add','post',newSpamObject).then((res)=>{
      if(res){
        console.log("spam saved successfully",res)
      }
    })
  }
  const handleTitleChange = (event) => {
    //show all the similar spams to help in selecting the spams, if not found click on Add new spam
    setTitle(event.target.value);
  };
  const itemHandler = (type) => {
    if(type === BUTTON_TYPE.SAVE){
      createNewSpamObjectAndSave()
    }else{
      let itemNumber = spamContent.length
      let obj = { type, itemNumber };
      type === DESCRIPTION_TYPE.TEXT ? (obj.content = "") : (obj.url = "");
      setSpamContent([...spamContent, obj]);
    }
     
  };

  const deleteItem = (itemNumber) => {
      spamContent.splice(itemNumber,1)
      setSpamContent([...spamContent])
      console.log(spamContent,itemNumber)
  };

  const handleTextChange = (value,itemNumber) =>{
    let updatedSpamContent = [...spamContent];
    updatedSpamContent[itemNumber].content = value
    setSpamContent(updatedSpamContent);

  }

  const handleImageChange = (url,itemNumber)=>{
    let updatedSpamContent = [...spamContent];
    updatedSpamContent[itemNumber].content = url
    setSpamContent(updatedSpamContent);
  }
  const handleURLChange = (value,itemNumber)=>{
    let updatedSpamContent = [...spamContent];
    updatedSpamContent[itemNumber].content = value
    setSpamContent(updatedSpamContent);
  }

  const handleVideoChange = (url,itemNumber)=>{
    let updatedSpamContent = [...spamContent];
    updatedSpamContent[itemNumber].content = "https://www.youtube.com/watch?v=07d2dXHYb94";
    setSpamContent(updatedSpamContent);
  }

  const getItemType = (item,index) => {
    switch(item.type){
      case DESCRIPTION_TYPE.TEXT :
        return (
          <Box m={2} key={index}>
              <RemovableInputField
                text="type here..."
                type="text"
                value={item.content}
                handleChange={handleTextChange}
                handleDelete={deleteItem}
                itemNumber = {index}
              />
          </Box>
          
              );
      case DESCRIPTION_TYPE.URL :
        return (
          <Box m={2} key={index}>
            <RemovableInputField
              text="enter url..."
              type="text"
              value={item.content}
              handleChange={handleURLChange}
              handleDelete={deleteItem}
              itemNumber = {index}
            />
          </Box>
        );
      case DESCRIPTION_TYPE.IMAGE :
        return (
          <Box m={2} key={index}>
            <UploadImageBox
            handleChange={handleImageChange}
            handleDelete={deleteItem}
            itemNumber = {index}
            />
          </Box>
        );
      case DESCRIPTION_TYPE.VIDEO :
        return (
          <Box m={2} key={index}>
            <UploadImageBox
            handleChange={handleVideoChange}
            handleDelete={deleteItem}
            itemNumber = {index}
            />
          </Box>
        );
      default :
          break;
    }
  };
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={12} sm={6}>
        <Box m={2}>
          <InputField
            text="Title"
            type="text"
            value={title}
            handleChange={(event)=>handleTitleChange(event)}
          />
        </Box>
        <form>
        {spamContent &&
          spamContent.map((item,index) => {
            return getItemType(item,index)
          })}
        </form>
        <Box m={1}>
          <AddFields itemHandler={itemHandler}/>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AddSpamTemplate;
