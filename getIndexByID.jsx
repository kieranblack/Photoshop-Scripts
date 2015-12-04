function getIndexByID(id){
  ref = new ActionReference();
  ref.putIdentifier( charIDToTypeID( "Lyr " ), id );
  return executeActionGet(ref).getInteger(charIDToTypeID( 'ItmI' ));
};
