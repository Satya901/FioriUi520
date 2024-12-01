sap.ui.define(
    ["ey/sd/sls/controller/BaseController",
        "sap/m/MessageBox",
        "sap/m/MessageToast"
    ],
    function(BaseController,MessageBox,MessageToast){
        return BaseController.extend("ey.sd.sls.controller.View3",{
            onBack: function(){
                //chaining in JS with same thing done to use parent to nav to view1
                // this.getView().getParent().to("idView1");
                this.getView().getParent().to("idView1");
            },
            onSave: function(){
                //alert("do you want to save");
                MessageBox.confirm("Do you want to save?",{
                    onClose: function(status){
                        if(status === "OK"){
                            MessageToast.show("The Order has been created 👌");
                        }else{
                            MessageBox.error("OOPS!! you broke my heart 💔");
                        }
                    }
                });
            }
        });
});