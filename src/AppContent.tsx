import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './helpers/styles';
import AvatarSVG from './helpers/avatar.svg';
import {useCopilot} from 'react-native-copilot';

const AppContent = () => {
  const {start} = useCopilot();
  const [bottomTourModalVisible, setBottomTourModalVisible] = useState(false);

  useEffect(() => {
    checkInitialTourStatus();
  }, []);

  const checkInitialTourStatus = async () => {
    try {
      const bottomTourCompleted = await AsyncStorage.getItem(
        'bottomTourCompleted',
      );
      if (!bottomTourCompleted) {
        setBottomTourModalVisible(true);
      }
    } catch (error) {
      console.error('Error checking tour status:', error);
    }
  };

  const handleStartBottomTour = async () => {
    setBottomTourModalVisible(false);
    await AsyncStorage.setItem('bottomTourCompleted', 'true');
    start();
  };

  return (
    <>
      <Modal
        useNativeDriver={true}
        useNativeDriverForBackdrop={true}
        isVisible={bottomTourModalVisible}
        onBackdropPress={() => {}}
        onSwipeComplete={() => {}}
        onBackButtonPress={() => {}}
        style={styles.modal}>
        <View style={styles.modalContent}>
          <View style={styles.illustrationContainerModal}>
            <AvatarSVG style={{width: 130, height: 130}} />
          </View>
          <Text style={styles.modalTitle}>Tour App</Text>
          <Text style={styles.modalText}>Welcome to Tour App!</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={handleStartBottomTour}>
            <Text style={styles.buttonText}>Start Tour</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default AppContent;
