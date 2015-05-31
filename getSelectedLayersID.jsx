function getSelectedLayersID(){
    var selectedLayersIdx = getSelectedLayersIdx();
    var selectedLayersID = new Array;
    for(var i=0;i<selectedLayersIdx.length;i++){
      selectedLayersID.push(changeLayerIdxToLayerID(selectedLayersIdx[i]));
    }
    return selectedLayersID;
}

function getSelectedLayersIdx(){
    var selectedLayers = new Array;
    var ref = new ActionReference();
    ref.putEnumerated( charIDToTypeID('Dcmn'), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
    var desc = executeActionGet(ref);
    if( desc.hasKey( stringIDToTypeID( 'targetLayers' ) ) ){
        desc = desc.getList( stringIDToTypeID( 'targetLayers' ));
        var c = desc.count
        var selectedLayersIdx = new Array();
        for(var i=0;i<c;i++){
            try{
                activeDocument.backgroundLayer;
                selectedLayersIdx.push(  desc.getReference( i ).getIndex() );
            }catch(e){
                selectedLayersIdx.push(  desc.getReference( i ).getIndex()+1 );
            }
        }
    }else{
        var ref = new ActionReference();
        ref.putProperty( charIDToTypeID('Prpr') , charIDToTypeID( 'ItmI' ));
        ref.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );
        try{
            activeDocument.backgroundLayer;
            selectedLayersIdx.push( executeActionGet(ref).getInteger(charIDToTypeID( 'ItmI' ))-1);
        }catch(e){
            selectedLayersIdx.push( executeActionGet(ref).getInteger(charIDToTypeID( 'ItmI' )));
        }
    }
    return selectedLayersIdx;
};

function changeLayerIdxToLayerID(idx){
    ref = new ActionReference();
    ref.putProperty( charIDToTypeID("Prpr") , charIDToTypeID( "LyrI" ));
    ref.putIndex( charIDToTypeID( "Lyr " ), idx );
    return executeActionGet(ref).getInteger( stringIDToTypeID( "layerID" ));
};
