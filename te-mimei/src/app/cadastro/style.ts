import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff', 
  },
  logo: {
    width: 150, 
    height: 50, 
    alignSelf: "center", 
    marginBottom: 40, 
},
  campos: {
    backgroundColor: '#edbddb', 
    borderRadius: 50,
    marginTop: 20,
    padding: 20,
    height: 500,
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',    
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#bf3c8d', 
    marginBottom: 25,
    textAlign: 'center',
  },
  inputContainer: {
    width: '80%', 
    marginBottom: 15,
    marginLeft: 20,
  },
  input: {
    width: '100%',
    height: 45, 
    borderColor: '#bf3c8d', 
    borderWidth: 1.5,
    borderRadius: 10, 
    marginBottom: 10,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    fontSize: 15,
  },
  inputFocused: {
    borderColor: '#bf3c8d', 
    backgroundColor: '#fff',
    shadowColor: '#bf3c8d',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  button: {
    width: '80%', 
    backgroundColor: '#bf3c8d',
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 15, 
    marginTop: 35,
    marginLeft: 10,
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 35,
  },
  label: {
    fontSize: 14,
    color: '#bf3c8d',
    marginBottom: 6,
    fontWeight: '500',
  },
  
});

export default styles;
