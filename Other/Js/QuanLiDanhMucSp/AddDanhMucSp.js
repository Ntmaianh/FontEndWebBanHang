app.controller('createDMSPCtrl', function($scope,$http) {
    $scope.danhMucSanPham = {
        "id": '',
        "ten": '',
        "anh": '../img-danhmuc/hat-dinh-duong-2.jpg',
        "slsp": ''
    }
    $rootScope.loginSuccess = false;
    
    // validate 
    $scope.addDMSP = function() {

        // validate 

        $scope.formInValid ='false';
        $scope.formInValidMassager = '';

        if ($scope.danhMucSanPham.id === '') {
            $scope.formInValidMassager = 'Vui lòng nhập id danh mục';
            $scope.formInValid ='true';
            return;
        }   
        if ($scope.danhMucSanPham.ten === '') {
            $scope.formInValidMassager += 'Vui lòng nhập tên danh mục';
            $scope.formInValid ='true';
            return;
        }
       
        if ($scope.danhMucSanPham.slsp === '') {
            $scope.formInValidMassager += 'Vui lòng nhập số lượng sản phẩm';
            $scope.formInValid ='true';
            return;
        }
        // call Api 
        $http({
            method:'POST',
            url: 'http://localhost:3000/danh-muc',
            data: $scope.danhMucSanPham
            }).then(function () {
                alert('Thêm thành công!');
            })
    }
})