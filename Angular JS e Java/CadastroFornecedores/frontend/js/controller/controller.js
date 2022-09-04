var app = angular.module('fornecedores');

app.controller('fornecedorCtrl', function ($scope, fornecedorService) {
    self = this;
    self.success = false;
    self.erro = false;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    $scope.fornecedores;

    function setFornecedor () {
        return {
            params: {
                id: self.fornecedores.id,
                nome: self.fornecedores.nome,
                email: self.fornecedores.email,
                comentario: self.fornecedores.comentario,
                cnpj: self.fornecedores.cnpj

            }
        };
    };

    self.listaCadastro = function () {
        fornecedorService.lista().then(function (lista) {
            { $scope.fornecedores = lista.data; }
        })

    };

    self.submit = function () {
        var fornecedor = setFornecedor();
        fornecedorService.cadastra(fornecedor)
            .catch(function (erro) {
                self.erro = true;
                $scope.errorMessage = erro.data;
                $scope.sucessMessage = null;
                console.log(erro.data);
            }).then(function (response) {
                $scope.sucessMessage = response.data;
                $scope.errorMessage = null;
            })
    }

    self.edit = function () {
        var fornecedor = setFornecedor();
        fornecedorService.edit(fornecedor)
            .catch(function (erro) {
                self.erro = true;
                $scope.errorMessage = erro.data;
                $scope.sucessMessage = null;
                console.log(erro.data);
            }).then(function (response) {
                $scope.sucessMessage = response.data;
                $scope.errorMessage = null;
            })
    }
    self.delete = function () {
        var fornecedor = setFornecedor();
        fornecedorService.delete(fornecedor)
            .catch(function (erro) {
                self.erro = true;
                $scope.errorMessage = erro.data;
                $scope.sucessMessage = null;
                console.log(erro.data);
            }).then(function (response) {
                $scope.sucessMessage = response.data;
                $scope.errorMessage = null;
            })

    }

});
