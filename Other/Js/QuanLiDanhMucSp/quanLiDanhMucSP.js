app.controller('QuanLiDanhMucSPCtrl', function($scope,$http){
    $scope.danhSachDanhMuc = [];
    $http({
        method: 'GET',
        url: 'http://localhost:3000/danh-muc'
    }).then(function(response){
        $scope.danhSachDanhMuc = response.data;
        console.log($scope.danhSachDanhMuc);
    })

    // xóa
$scope.DeleteDMSanPham = function (id) {
    if(confirm("Bạn chắc chắn muốn xóa ?")) {
        $http({
            method: 'DELETE',
            url: 'http://localhost:3000/danh-muc/' + id
        })
        .then(function () {
            alert("Xóa danh mục sản phẩm thành công!")
        })
    }
}
})