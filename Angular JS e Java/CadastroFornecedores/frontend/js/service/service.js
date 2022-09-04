var app = angular.module('fornecedores');
var baseUrl = "http://localhost:8080/Backend/v1/api"

app.service('fornecedorService', function ($http) {


    return {
        cadastra: function (fornecedor) {
            return $http({
                method: 'POST',
                url: baseUrl + '/add',
                data: fornecedor.params,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        },
        edit: function (fornecedor) {
            return $http({
                method: 'PUT',
                url: baseUrl + '/edit',
                data: fornecedor.params,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        },
        lista: function () {
            return $http({
                method: 'GET',
                url: baseUrl
            }).then(function sucess (response) {
                return response;
            })
        },
        delete: function (fornecedor) {
            return $http({
                method: 'DELETE',
                url: baseUrl + '/remove',
                data: fornecedor.params,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
    }

})
