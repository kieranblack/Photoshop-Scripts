function getAbDataByID(id){
    var abObj = {};
    abObj.result = false;  

    ref = new ActionReference(); 
    ref.putIdentifier(charIDToTypeID( 'Lyr ' ), parseInt(id));

    var desc = executeActionGet(ref);

    var ab_actDesc = desc.getObjectValue(stringIDToTypeID('artboard'));
    var abrect_desc = ab_actDesc.getObjectValue(stringIDToTypeID('artboardRect'));
    // get bounds of artboard. 
    abObj.top = parseInt(abrect_desc.getUnitDoubleValue(charIDToTypeID('Top ')))
    abObj.left = parseInt(abrect_desc.getUnitDoubleValue(charIDToTypeID('Left')));
    abObj.bottom = parseInt(abrect_desc.getUnitDoubleValue(charIDToTypeID('Btom')));
    abObj.right = parseInt(abrect_desc.getUnitDoubleValue(charIDToTypeID('Rght')));

    // add the 4 values together, and if they are 0  then I know its not an actual artboard. 
    var checVal = (abObj.top+abObj.left+abObj.bottom+abObj.right);
    if (checVal === 0)  return abObj;

    abObj.width = abObj.right - abObj.left;
    abObj.height = abObj.bottom - abObj.top

    abObj.rulerOrigin = getActiveDocRulerOrigin();
    
    var lt = -abObj.rulerOrigin[0] + abObj.left;
    var tp = -abObj.rulerOrigin[1] + abObj.top;
    var rt = abObj.width + lt ;
    var bt = abObj.height + tp ;
    
    abObj.hguides = getGuidesWithinBounds(aDoc,abObj.left,abObj.top,abObj.right,abObj.bottom)[0];
    abObj.vguides = getGuidesWithinBounds(aDoc,abObj.left,abObj.top,abObj.right,abObj.bottom)[1];
    abObj.name = desc.getString(charIDToTypeID( 'Nm  ' ));
    abObj.id = desc.getInteger(stringIDToTypeID( 'layerID' ));
    abObj.index = desc.getInteger(charIDToTypeID( 'ItmI' ));
    abObj.result = true;
    abObj.allData = "Name: " + abObj.name + "\nID: " + abObj.id + "\nIndex: " + abObj.index + "\nTop: " + abObj.top + "\nLeft: " + abObj.left + "\nBottom: " + abObj.bottom + "\nRight: " + abObj.right + "\nWidth: " + abObj.width + "\nHeight: " + abObj.height + "\nHorizontal Guides: "  + abObj.hguides + "\nVertical Guides: " + abObj.vguides

    return abObj;
 }
