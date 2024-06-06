app.controller('xacnhanSanPhamCtrl',function($scope,$http,$location){
    $scope.danhSachSanPham = [];
    $scope.total = 0;
    $scope.tenKhachHang ='' 

    $http({
        method: 'GET',
        url: 'http://localhost:3000/SanPhamOrder'
    }).then(function(response) {
        $scope.danhSachSanPham = response.data;
        console.log($scope.danhSachSanPham);
        for(var i= 0;i <$scope.danhSachSanPham.length;i++) {
            $scope.total = $scope.danhSachSanPham[i].giaBan * $scope.danhSachSanPham[i].soLuong
        }
        console.log( $scope.total);
    })
    $scope.AddListHoaDon = function() {
        var listHoaDon = [];
        for (var i = 0; i < $scope.danhSachSanPham.length; i++) {
            var hoaDon = {
                "MaHĐ1": 'HĐ3',
                "TenSanphamMua": $scope.danhSachSanPham[i].TenSp,
                "anh": $scope.danhSachSanPham[i].anh,
                "soLuong": $scope.danhSachSanPham[i].soLuong,
                "MaNguoiDung": "1",
                "tenKhachHang": $scope.tenKhachHang,
            };
            listHoaDon.push(hoaDon);
        }
        $http({
            method: 'POST',
            url: 'http://localhost:3000/hoa-don',
            data: listHoaDon
        }).then(function() {
            alert("Bạn đã đặt hàng thành công!");
            $location.path("trangChu");
        }) ;
    };
});