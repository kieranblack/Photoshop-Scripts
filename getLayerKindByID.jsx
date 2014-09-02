function getLayerKindByID(id){
   var ref, desc, adjustmentDesc, layerSectionType;
   ref = new ActionReference();
   ref.putIdentifier(charIDToTypeID("Lyr "), id);
   desc =  executeActionGet(ref);
   var layerType = typeIDToStringID(desc.getEnumerationValue(stringIDToTypeID('layerSection')));
   if(layerType != 'layerSectionContent') return;
   if(desc.hasKey(stringIDToTypeID('textKey'))) return LayerKind.TEXT;
   if(desc.hasKey(stringIDToTypeID('smartObject'))) return LayerKind.SMARTOBJECT;
   if(desc.hasKey(stringIDToTypeID('layer3D'))) return LayerKind.LAYER3D;
   if(desc.hasKey(stringIDToTypeID('adjustment'))){
      switch(typeIDToStringID(desc.getList(stringIDToTypeID('adjustment')).getClass(0))){
         case 'photoFilter' : return LayerKind.PHOTOFILTER;
         case 'solidColorLayer' : return LayerKind.SOLIDFILL;
         case 'gradientMapClass' : return LayerKind.GRADIENTMAP;
         case 'gradientMapLayer' : return LayerKind.GRADIENTFILL;
         case 'hueSaturation' : return LayerKind.HUESATURATION;
         case 'colorLookup' : return;
         case 'colorBalance' : return LayerKind.COLORBALANCE;
         case 'patternLayer' : return LayerKind.PATTERNFILL;
         case 'invert' : return LayerKind.INVERSION;
         case 'posterization' : return LayerKind.POSTERIZE;
         case 'thresholdClassEvent' : return LayerKind.THRESHOLD;
         case 'blackAndWhite' : return LayerKind.BLACKANDWHITE;
         case 'selectiveColor' : return LayerKind.SELECTIVECOLOR;
         case 'vibrance' : return LayerKind.VIBRANCE;
         case 'brightnessEvent' : return LayerKind.BRIGHTNESSCONTRAST;
         case  'channelMixer' : return LayerKind.CHANNELMIXER;
         case 'curves' : return LayerKind.CURVES;
         case 'exposure' : return LayerKind.EXPOSURE;
         default : return typeIDToStringID(desc.getList(stringIDToTypeID('adjustment')).getClass(0));
      }
   }
    return LayerKind.NORMAL;
};