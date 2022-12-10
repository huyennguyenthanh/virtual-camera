import React from 'react'
import { Center, HStack, VStack } from '@chakra-ui/react'
import Webcam from "react-webcam";
import { IconButton } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import { BsCameraVideoFill, BsCameraVideoOffFill } from 'react-icons/bs';
import { AiFillAudio, AiOutlineAudioMuted } from 'react-icons/ai'
export default class Camera extends React.Component {

  videoConstraints = {
    width: '60%',
    height: '40%',
    facingMode: "user"
  };
  constructor(props) {
    super(props);
    this.handleTurnOff = this.handleTurnOff.bind(this);
    this.handleTurnOn = this.handleTurnOn.bind(this);
    this.state = { isCameraTurnOff: false};
    
  }

  



  handleTurnOff(e) {
    e.preventDefault();
    this.setState({ isCameraTurnOff: true });
    console.log(this.state.isCameraTurnOff)
    
  }
  handleTurnOn(e) {
    e.preventDefault();
    this.setState({ isCameraTurnOff: false });
    console.log(this.state.isCameraTurnOff)
  }

  render () {

    const isCameraTurnOff = this.state.isCameraTurnOff;
    var cameraButton;
    var camera;
    var audioButton;
    if (isCameraTurnOff) {
      cameraButton = <IconButton
        colorScheme='gray'
        isRound="true"
        onClick={this.handleTurnOn}
        icon={<BsCameraVideoOffFill />}
      />;
      
      camera = <Image 
        src='logo512.png' 
        alt='Camera' 
        h={this.videoConstraints.height}
        w={this.videoConstraints.width}
      />;
    } else {
      cameraButton = <IconButton
        colorScheme='twitter'
        isRound="true"
        onClick={this.handleTurnOff}
        icon={<BsCameraVideoFill />}
      />;
      // camera = <Webcam 
      //   videoConstraints={this.videoConstraints}
      // />;
    }
    return (
      <VStack>
        {camera}
        <HStack>
        {cameraButton}
        </HStack>
        
      </VStack>
    );
  }

}
