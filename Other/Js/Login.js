app.controller('LoginController', function($scope,$rootScope, $http,$location) {
    $rootScope.credentials = {
        email :'',
        matKhau :'',
    }
    $rootScope.loginSuccess = true;
    $rootScope.AC = undefined;
    $scope.login = function() {
      $scope.Nguoidung = [];
      $http({
        method: 'GET',
        url: 'http://localhost:3000/Nguoi-dung'
      }).then(function(response){
        $scope.Nguoidung = response.data;
        console.log('Lấy Account thành công');
        console.log($scope.Nguoidung);
        console.log( $rootScope.credentials);

        var foundAccount = $scope.Nguoidung.find(function(obj) {
          return obj.email === $rootScope.credentials.email && obj.matKhau === $scope.credentials.matKhau;
        });
        if (foundAccount) 
        {
          $rootScope.AC = foundAccount;
          $rootScope.GlobalName = foundAccount.position;
          $location.path("trangChu");
          alert("Đăng nhập thành công");
        }
        else 
        {
          $rootScope.GlobalName = null;
          alert("Đăng nhập thất bại");
        }
      });
    };
});