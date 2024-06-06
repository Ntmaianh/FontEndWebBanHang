app.controller('UpdateSanPham', function($scope,$http,$routeParams){
    $scope.danhSachDanhMuc = [];
    $scope.sanPham = {
        "id": '',
        "ten": '',
        "giaNiemYet": 0,
        "sale": '0',
        "giaBan": 0,
        "tenDanhMuc": '',
        "idDanhMuc": '',
        "khoiLuong": '',
        "thanhphan": '',
        "huongdanbaoquan": "Nơi khô ráo thoáng mát, giữ kín sau khi sử dụng",
        "hansudung": "6 tháng",
        "CanhBaoAnToan": " Không dùng khi sản phẩm hết hạn",
        "SoTCB": "10/DINHNAM/2019",
        "TieuChuan": "22000-2018 – HACCP"
    };
      // lấy ra danh mục 
      $http({
        method: 'GET',
        url: 'http://localhost:3000/danh-muc'
    }).then(function (response) {
        $scope.danhSachDanhMuc = response.data;
        console.log($scope.danhSachDanhMuc);
    })

    // chi tiết 

    $http({
        method: 'GET',
        url: 'http://localhost:3000/san-pham/' + $routeParams.id
    }).then(function(response){
        $scope.sanPham = response.data;
    })

    $scope.UpdateSanPham = function () {
        $scope.formInValid = false;
        $scope.formInValidMessage = '';
        $scope.danhSachDanhMuc = [];
        if ($scope.sanPham.ten === '' ||
            isNaN($scope.sanPham.giaNiemYet)|| $scope.sanPham.sale === '' ||
            $scope.sanPham.tenDanhMuc === '' ||
            $scope.sanPham.khoiLuong === '' || $scope.sanPham.thanhphan === '') {
            $scope.formInValid = true;
            $scope.formInValidMessage = 'Nhập đầy đủ thông tin!';
            return;
        }
        // Tính toán giá bán dựa trên giá niêm yết và giảm giá
        $scope.sanPham.giaBan = $scope.sanPham.giaNiemYet - ($scope.sanPham.giaNiemYet * (Number($scope.sanPham.sale.replace("%",'')) / 100));
        // Gán idDanhMuc bằng id của danh mục tương ứng
        for (var i = 0; i < $scope.danhSachDanhMuc.length; i++) {
            if ($scope.sanPham.tenDanhMuc === $scope.danhSachDanhMuc[i].ten) {
                $scope.sanPham.idDanhMuc = $scope.danhSachDanhMuc[i].id;
            }
        }
    
        // Gọi API
        $http({
            method: 'PUT',
            url: 'http://localhost:3000/san-pham/' + $scope.sanPham.id,
            data: $scope.sanPham
        }).then(function () {
            alert("Sửa sản phẩm thành công !");
        });
    };
})

