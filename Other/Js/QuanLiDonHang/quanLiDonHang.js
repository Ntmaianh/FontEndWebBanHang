app.controller('QuanLiDonHangCtrl', function ($scope,$http){

    // lấy ra danh sách đơn hàng 

    $scope.danhSachHoaDon = [];

    $http({
        method: 'GET',
        url: 'http://localhost:3000/hoa-don'
    }).then(function(response){
        $scope.danhSachHoaDon = response.data;
    })

})