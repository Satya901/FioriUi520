sap.ui.define(
    ["ey/sd/sls/controller/BaseController"],
    function(BaseController){
        return BaseController.extend("ey.sd.sls.controller.View1",{
            onNext: function(){
                //Step 1: get the current view object
                var oView = this.getView();
                //Step 2: get the object of mother from the current view
                var oAppCon = oView.getParent();
                //Step 3: The container will navigate to next view
                oAppCon.to("idView2");
            },

            onThirdView: function(){
                var oView2 = this.getView();
                var oAppCon = oView2.getParent();
                oAppCon.to("idView3");
                // this.getView().getparent().to("idView3");

            }
        });
});