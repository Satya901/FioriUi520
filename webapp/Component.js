sap.ui.define(
    ["sap/ui/core/UIComponent"], 
    function(UIComponent){
        return UIComponent.extend("ey.sd.sls.Component",{
            metadata: {
                manifest: "json"
            },
            init: function(){
                //instantiate the base class constructor
                UIComponent.prototype.init.apply(this);
            },
            createContent: function(){

                var oAppView = new sap.ui.view({
                    id: "idAppView",
                    viewName: "ey.sd.sls.view.App",
                    type: "XML"
                });

                //Step 1: Obtain the object of app container control
                var oAppCon = oAppView.byId("idAppCon");

                //Step 2: Create objects of our newly created views
                var oView1 = new sap.ui.view({
                    id: "idView1",
                    viewName: "ey.sd.sls.view.View1",
                    type: "XML"
                });

                var oView2 = new sap.ui.view({
                    id: "idView2",
                    viewName: "ey.sd.sls.view.View2",
                    type: "XML"
                });

                var oView3 = new sap.ui.view({
                    id: "idView3",
                    viewName: "ey.sd.sls.view.View3",
                    type: "XML"
                });

                //Step 3: fill the pages aggregation of the view --- no chaining
                oAppCon.addPage(oView1);
                oAppCon.addPage(oView2);
                oAppCon.addPage(oView3);

                ///Question
                // #1 - View1 (correct)  #2 - View2   #3 - Both   #4 - Error


                return oAppView;

            },
            destroy: function(){}
        });
});