import React from 'react'
import { Center, HStack, VStack } from '@chakra-ui/react'
import Webcam from "react-webcam";
import { IconButton } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import { BsCameraVideoFill, BsCameraVideoOffFill } from 'react-icons/bs';
import { AiFillAudio, AiOutlineAudioMuted } from 'react-icons/ai'
export default class Camera extends React.Component {

  videoConstraints = {
    width: '80%',
    height: '50%',
    facingMode: "user"
  };
  constructor(props) {
    super(props);
    this.handleCamera = this.handleCamera.bind(this);
    this.handleAudio = this.handleAudio.bind(this);

    this.state = {
      isCameraTurnOff: false,
      isAudioTurnOff: false
    };

  }


  handleCamera(e) {
    e.preventDefault();
    if (this.state.isCameraTurnOff) {
      this.setState({ isCameraTurnOff: false });
    } else {
      this.setState({ isCameraTurnOff: true });
    }

    console.log("Camera : " + this.state.isCameraTurnOff)

  }
  handleAudio(e) {
    e.preventDefault();
    if (this.state.isAudioTurnOff) {
      this.setState({ isAudioTurnOff: false });
    } else {
      this.setState({ isAudioTurnOff: true });
    }

    console.log("Audio: " + this.state.isAudioTurnOff)

  }


  render() {

    const isCameraTurnOff = this.state.isCameraTurnOff;
    const isAudioTurnOff = this.state.isAudioTurnOff;
    var cameraButton, audioButton;
    var camera;
    if (isAudioTurnOff) {
      audioButton = <IconButton
        colorScheme='gray'
        isRound="true"
        onClick={this.handleAudio}
        icon={<AiOutlineAudioMuted />}
      />
    } else {
      audioButton = <IconButton
        colorScheme='twitter'
        isRound="true"
        onClick={this.handleAudio}
        icon={<AiFillAudio />}
      />
    }
    if (isCameraTurnOff) {
      cameraButton = <IconButton
        colorScheme='gray'
        isRound="true"
        onClick={this.handleCamera}
        icon={<BsCameraVideoOffFill />}
      />;

      camera = <Image
        src='logo512.png'
        alt='Camera'
        style={{
          height: this.videoConstraints.height,
          width: this.videoConstraints.width,
          maxHeight: "600px",
          maxWidth: "900px"
        }}
      />;
    } else {
      cameraButton = <IconButton
        colorScheme='twitter'
        isRound="true"
        onClick={this.handleCamera}
        icon={<BsCameraVideoFill />}
      />;
      camera = <Webcam
      
        audio={() => isAudioTurnOff}
        style={{ borderRadius: "20px" ,
        height: this.videoConstraints.height,
        width: this.videoConstraints.width,

        maxHeight: "600px",
        maxWidth: "900px"
      
      }}
        // h={this.videoConstraints.height}
        // w={this.videoConstraints.width}

      />;
    }
    return (
      <VStack>
        {camera}
        <HStack>
          {cameraButton}
          {audioButton}
        </HStack>
      </VStack>
    );
  }

}
