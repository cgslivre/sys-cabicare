app.service("TipoProductoServices",function($http, $q, handleBehavior) {
    return({
        sListarCbo: sListarCbo
    });
    function sListarCbo(datos) {
      var request = $http({
            method : "post",
            url : angular.patchURLCI+"TipoProducto/listar_tipo_producto_cbo",
            data : datos
      });
      return (request.then(handleBehavior.success,handleBehavior.error));
    }
});
