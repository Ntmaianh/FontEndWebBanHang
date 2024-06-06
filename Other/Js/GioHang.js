app.controller('CartCtrl', function($scope, $rootScope, $http,$location) {
    $scope.danhSachSanPham = [];
    $rootScope.totalQuantity = 0;
    $scope.Total = 0;
        $http({
            method: 'GET',
            url: "http://localhost:3000/GioHang",
        }).then(function (response) {
            console.log(response);
            $scope.danhSachSanPham = response.data;
            for (let index = 0; index < $scope.danhSachSanPham.length; index++) {
                $scope.Total = $scope.danhSachSanPham[index].giaBan * $scope.danhSachSanPham[index].soLuong;
            }
             $rootScope.totalQuantity = $scope.danhSachSanPham.length;
        })
    $scope.addSl = function() {
        for (let index = 0; index < $scope.danhSachSanPham.length; index++) {
            $scope.danhSachSanPham[index].soLuong += 1;
            $scope.Total = $scope.danhSachSanPham[index].giaBan * $scope.danhSachSanPham[index].soLuong;
        }
    };

    $scope.XoaSl = function() {
        for (let index = 0; index < $scope.danhSachSanPham.length; index++) {
            $scope.danhSachSanPham[index].soLuong -= 1;
            $scope.Total = $scope.danhSachSanPham[index].giaBan * $scope.danhSachSanPham[index].soLuong;
        }
    };
    // Xóa 
    $scope.DeleteSanPham = function (id) {
        if(confirm("Bạn chắc chắn muốn xóa ?")) {
            console.log(id);
            $http({
                method: 'DELETE',
                url: 'http://localhost:3000/GioHang/' + id
            }).then(function () {
                alert("Xóa sản phẩm thành công!")
            })
        }
    }

    // xác nhận sản phẩm

    $scope.muaNgay = function (idSp) {
        $scope.sanpham = {};
        $http({
            method: 'GET',
            url: 'http://localhost:3000/GioHang/' + idSp
        }).then(function(response){
            $scope.sanpham = response.data;
            $scope.SanPhamXacNhan = {
                "TenSp": $scope.sanpham.ten,
                "anh": $scope.sanpham.anh,
                "soLuong":$scope.sanpham.soLuong ,
                "MaNguoiDung": $scope.sanpham.MaNguoiDung ,
                "giaBan": $scope.sanpham.giaBan,
                "giaNiemYet": $scope.sanpham.giaNiemYet
            }
            $http({
                method: 'POST',
                url: 'http://localhost:3000/SanPhamOrder',
                data: $scope.SanPhamXacNhan
            }).then(function(){
                $location.path("Xac-nhan-san-pham");
            });
            $http({
                method: 'DELETE',
                url: 'http://localhost:3000/GioHang/' + idSp
            })
        });
    }
});