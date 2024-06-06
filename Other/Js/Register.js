app.controller('RegisterCtrl',function($scope,$http){
    $scope.id = 2;
    $scope.User = {
        "id" : $scope.id +1,
        "ho" : '',
        "ten":'',
        "gioiTinh":'',
        "email":'',
        "matKhau":'',
        "chucVu":'',
    };
    
    $scope.DangKi = function(){
        // validate 
        $scope.formInValid = false;
        $scope.formInValidMessage = '';
        if($scope.User.ho === '' || $scope.User.ten === ''|| $scope.User.gioiTinh === '' || $scope.email === '' || $scope.matKhau === '' || $scope.chucVu === '') {
            $scope.formInValid = true;
            $scope.formInValidMessage = 'Vui lòng nhập đầy đủ thông tin';
            return;
        }
        // call api 
        $http({
            method: 'POST',
            url: 'http://localhost:3000/Nguoi-dung',
            data: $scope.User
        }).then(function(){
            alert('Tạo tài khoản thành công!')
        })
    }
})