
import {Alert, Modal, StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';
import {useForm,Controller, set} from 'react-hook-form';
import { COLORS, FONTS } from '../../constants/theme';
import IconButton from '../ui/IconButton';
import images from '../../constants/images';
import { editListById } from '../../actions/actionsList';


const ModalTags = ({modalVisible,setModalVisible,value,id,setValue,accessToken}) => {

  const {control,handleSubmit,formState:{errors},reset} = useForm({
    defaultValues:{
      tag:""
    }
  });

  const onSubmit = async (data) => {
   setValue(
    {...value,
      keywords:[...value.keywords,data.tag]
    }
   )
   await editListById(id,{...value,keywords:[...value.keywords,data.tag]},accessToken)
  reset();
    
  }

  

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.textContainer}>
              <Text style={styles.modalText}>Add a new Tag</Text>
              <IconButton iconUrl={images.cancel} dimension={30} handlePress={()=>setModalVisible(!modalVisible)}></IconButton>
            </View>
            
            <Controller
              control={control}
              rules={{required:true}}
              render={({field: {onChange,onBlur,value}})=>(
                <TextInput
                  style={styles.textInput}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name='tag'
            />

            {errors.tag && <Text style={{color: "#FF0000"}}>This is required.</Text>}

            
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={handleSubmit(onSubmit)}>
              <Text style={styles.textStyle}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalTags;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    width: 300,
    height: 215,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'start',
    padding: 20,
    gap: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "100%",
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: COLORS.secondary,

    
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: FONTS.regular,
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: FONTS.regular,
  },
  textInput:{
    backgroundColor: COLORS.tertiary,
    borderRadius: 10,
    padding: 20,
    width: "100%",
  },
});