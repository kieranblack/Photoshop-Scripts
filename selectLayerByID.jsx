/*
Use true or false for the add variable. True will add the layer with layer id to the current selection (good for carrying out multiple changes at once). False will only select the layer with layer id.
*/

function selectLayerByID(id, add){
   add = (add == undefined) ? add = false : add;
   var ref = new ActionReference();
   ref.putIdentifier(charIDToTypeID('Lyr '), id);
   var desc = new ActionDescriptor();
   desc.putReference(charIDToTypeID('null'), ref);
   if(add){
      desc.putEnumerated(stringIDToTypeID('selectionModifier'), stringIDToTypeID('selectionModifierType'), stringIDToTypeID('addToSelection'));
   }
   desc.putBoolean(charIDToTypeID('MkVs'), false);
   executeAction(charIDToTypeID('slct'), desc, DialogModes.NO);
}