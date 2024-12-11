import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#a9a9a9',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  // bottom bar
  containerBB: {
    position: 'relative',
  },
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 60,
    alignItems: 'center',
    paddingBottom: 4,
    elevation: 10,
  },
  clockButtonContainer: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  clockWrapper: {
    position: 'absolute',
    top: -30,
    alignItems: 'center',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  ringContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  innerCircle: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FF0000',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
  },
  clockLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  bottomBarShadow: {
    position: 'absolute',
    top: -5,
    left: 0,
    right: 0,
    height: 1,
    elevation: 10,
  },

  // bottom bar - clock
  containerClock: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  listContentClock: {
    paddingBottom: 20,
  },
  headerTextClock: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  itemContainerClock: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  textContainerClock: {
    marginLeft: 12,
    flex: 1,
  },
  nameClock: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },

  // tour - modal
  modal: {
    justifyContent: 'center',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    marginHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  modalText: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginHorizontal: 10,
    elevation: 3,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  illustrationContainerModal: {
    width: 70,
    height: 70,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // bottom bar tour - tooltip component
  tooltipTitleBB: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#010101',
  },
  tooltipTextBB: {
    fontSize: 14,
    marginBottom: 10,
    color: '#010101',
  },
  buttonContainerBB: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonBB: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#FF0000',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 5,
  },
  buttonTextBB: {
    color: '#fff',
    fontSize: 14,
  },
});
