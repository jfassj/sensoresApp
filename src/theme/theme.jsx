import {StyleSheet} from 'react-native';
export const colores = {
  uno: '#BBD6B8',
  dos: '#AEC2B6',
  tres: '#94AF9F',
  cuatro: '#DBE4C6',
  cinco: '#fff',
  seis: '#000',
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colores.tres,
    padding: 20,
    alignItems: 'center',
  },
  sensor_titulo: {
    color: colores.cinco,
    fontSize: 20,
    marginBottom: 20,
  },
  sensor_etiqueta: {
    color: colores.cinco,
    fontSize: 18,
  },
  sensor_input: {
    width:'100%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderColor: colores.cuatro,
    color: colores.cuatro,
  },
  sensor_input_text: {
    width:'100%',
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderLeftWidth: 0,
    borderRightWidth: 1,
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderColor: colores.cuatro,
    color: colores.cuatro,
  },
  sensor_boton_guardar:{
    width: 60,
    height: 60,
    borderBottomWidth: 0,
    borderRadius: 10,
    backgroundColor: colores.dos,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
