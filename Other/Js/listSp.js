app.controller('ListSanPhamCtrl',function($scope,$http,$rootScope) {
    $scope.danhSachSanPham = [];
    $scope.danhSachDanhMuc = [];
    $scope.DanhSachSanPhamFiller = [];
    $rootScope.stringSearch='';
    $http({
        method: 'GET',
        url: 'http://localhost:3000/san-pham'
    }).then(function(response) {
        $scope.danhSachSanPham = response.data;
       // console.log($scope.danhSachSanPham);
    })
    // lấy ra danh mục 
    $http({
        method: 'GET',
        url: 'http://localhost:3000/danh-muc'
    }).then(function(response){
        $scope.danhSachDanhMuc = response.data;
        console.log($scope.danhSachDanhMuc);
    })



    // lọc theo danh mục 

    $scope.OnClick = function(idDM) {
        console.log(idDM)
        $scope.filterDanhMuc = idDM;
        $http({
            method: "GET",
            url: "http://localhost:3000/san-pham",
            params: {
                idDanhMuc: idDM,
            }
        }).then(function (response) {
            console.log(response);
            $scope.danhSachSanPham = response.data;
        })
    }
    $scope.themVaoGioHang = function(idSp) {
        $scope.sanpham = {};
        $http({
            method: 'GET',
            url: 'http://localhost:3000/san-pham/' + idSp
        }).then(function(response){
            $scope.sanpham = response.data;
            $scope.SanPhamCart = {
                "maSp": $scope.sanpham.id,
                "TenSp": $scope.sanpham.ten,
                "anh": $scope.sanpham.anh,
                "soLuong": 1,
                "MaNguoiDung": "1",
                "giaBan": $scope.sanpham.giaBan,
                "giaNiemYet": $scope.sanpham.giaNiemYet
            }
            $http({
                method: 'POST',
                url: 'http://localhost:3000/GioHang',
                data: $scope.SanPhamCart
            }).then(function(){
                alert("Đã thêm sản phẩm vào giỏ hàng!")
            });
        });
    }
})
