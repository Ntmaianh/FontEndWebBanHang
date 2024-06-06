app.controller('updateDMSPCtrl', function($scope,$http,$routeParams){


    $scope.danhMucSanPham = {
        "id": '',
        "ten": '',
        "anh": '',
        "slsp": ''
    }
    // get id id 

    $http({
        method: 'GET',
        url: 'http://localhost:3000/danh-muc/' + $routeParams.id
    }).then(function (response) {
        $scope.danhMucSanPham = response.data;
    })

    $scope.updateDMSP = function() {

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
        if ($scope.danhMucSanPham.anh === '') {
            $scope.formInValidMassager += 'Vui lòng nhập hình ảnh';
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
            method:'PUT',
            url: 'http://localhost:3000/danh-muc/' + $scope.danhMucSanPham.id,
            data: $scope.danhMucSanPham
            }).then(function () {
                alert('Sửa thành công!');
            })
    }
})