function getLayerVisibilityByID(id) { 
    var ref = new ActionReference(); 
    ref.putProperty( charIDToTypeID("Prpr") , charIDToTypeID( "Vsbl" )); 
    ref.putIdentifier( charIDToTypeID( "Lyr " ), id);
    return executeActionGet(ref).getBoolean(charIDToTypeID( "Vsbl" ));; 
};