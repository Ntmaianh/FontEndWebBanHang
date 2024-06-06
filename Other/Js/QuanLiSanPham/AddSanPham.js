app.controller('createSpCtrl', function($scope,$http){
    $scope.danhSachDanhMuc = [];
    $scope.SanPham = {
        "id": '',
        "ten": '',
        "anh": '/img-spbc/Banana-Say.png',
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

     // Thêm 
     $scope.AddSanPham = function () {
        // Valididate
        $scope.formInValid = false;
        $scope.formInValidMessage = '';
        $scope.imageSrc ='';
        if ($scope.SanPham.ten === '' 
            || $scope.SanPham.giaNiemYet === '' || $scope.SanPham.sale === ''
            || $scope.SanPham.tenDanhMuc === '' 
            || $scope.SanPham.khoiLuong === '' || $scope.SanPham.thanhphan === '') {
            $scope.formInValid = true;
            $scope.formInValidMessage = 'Nhập đầy đủ thông tin!';
            return;
        }
          // Tính toán giá bán dựa trên giá niêm yết và giảm giá
    $scope.SanPham.giaBan = $scope.SanPham.giaNiemYet - ($scope.SanPham.giaNiemYet * (Number($scope.SanPham.sale.replace("%",'')) / 100));
    // Gán idDanhMuc bằng id của danh mục tương ứng
    for (var i = 0; i < $scope.danhSachDanhMuc.length; i++) {
        if ($scope.SanPham.tenDanhMuc === $scope.danhSachDanhMuc[i].ten) {
            $scope.SanPham.idDanhMuc = $scope.danhSachDanhMuc[i].id;
        }
    }
        //Gọi API
        $http({
            method: 'POST',
            url: 'http://localhost:3000/san-pham',
            data: $scope.SanPham
        }).then(function () {
            alert("Thêm sản phẩm thành công !")
            console.log($scope.SanPham);

        })
    }

})