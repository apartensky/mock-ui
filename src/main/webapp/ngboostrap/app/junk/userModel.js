function LoginController($scope, $timeout) {
    $scope.user=new User();
    getUser().then(function(data){
            $scope.user = data;
    });  
    $scope.getCity = function () {
        console.log("User:", $scope.user.getCity());
    };
    $scope.$watch("user.getCity()", function(oldVal, newVal){
        console.log("watch:", oldVal, newVal);
    });
    function getUser(){
        return $timeout(function(){
            return new User({
                    firstName: "Foo",
                    lastName: "Bar",
                    address: {
                        city: "Boston"
                    }
                });
        }, 1000);
    }    
    function User(raw){
        this._raw=raw;    
    };
    
    User.prototype.getCity=function(){
        //if(this._raw)
            return this._raw.address.city;
        //else
        //    return "";
    }
}

