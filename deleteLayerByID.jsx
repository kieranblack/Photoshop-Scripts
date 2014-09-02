function deleteLayerByID(id) {
  var desc = new ActionDescriptor();
  var ref = new ActionReference();
  ref.putIdentifier(charIDToTypeID('Lyr '), id);
  desc.putReference( charIDToTypeID('null'), ref );
  executeAction( charIDToTypeID('Dlt '), desc, DialogModes.NO );
};
