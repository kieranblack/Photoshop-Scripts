function getLayerNameByID(id){
  ref = new ActionReference();
  ref.putProperty( charIDToTypeID("Prpr") , charIDToTypeID( "Nm  " ));
  ref.putIdentifier( charIDToTypeID( "Lyr " ), id );
  return executeActionGet(ref).getString(charIDToTypeID( "Nm  " ));
};