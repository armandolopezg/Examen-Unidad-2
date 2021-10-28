var contador=1;
var usuario;
var combo;
var selected;
var codigo;
var cantidad;
var combo1;
var opcion;
var usuarionuevo;
var numeronuevo;
var estatus;

function imprimir(){
usuario = document.getElementById("usuariop").value;
combo = document.getElementById("marca");
selected = combo.options[combo.selectedIndex].text;
codigo = document.getElementById("codigo").value;
cantidad = document.getElementById("cantidad").value;
combo1 = document.getElementById("disponibilidad");
opcion = combo1.options[combo1.selectedIndex].text;
    tabla();
    limpiar();
}
function limpiar(){
    document.getElementById("usuariop").value="";
    document.getElementById("marca").value="";
    document.getElementById("codigo").value="";
    document.getElementById("cantidad").value="";
    document.getElementById("disponibilidad").value="";
}
function tabla(){
    document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
    `<tr>
        <th scope="row">${contador}</th>
        <td>${usuario}</td>
        <td>${selected}</td>
        <td>${codigo}</td>
        <td>${cantidad}</td>
        <td>${opcion}</td>
        <td><button class="btn-sm btn-primary" id="cambiar" onclick="cambiar()">Editar contenido</button></td>
    </tr>`;
contador=contador+1;
}
function cambiar(){
 usuarionuevo = prompt("Ingrese el nuevo usuario o si no quiere ingresar uno deje vacio");
 $('#tab td').eq(0).html(usuarionuevo);
 numeronuevo = prompt("Ingrese el numero a ocupar");
 $('#tab td').eq(3).html(numeronuevo);
 estatus = prompt("Ingrese el nuevo estatus");
 $('#tab td').eq(4).html(estatus);


}

(function(document) {
    'use strict';

    var LightTableFilter = (function(Arr) {

      var _input;

      function _onInputEvent(e) {
        _input = e.target;
        var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
        Arr.forEach.call(tables, function(table) {
          Arr.forEach.call(table.tBodies, function(tbody) {
            Arr.forEach.call(tbody.rows, _filter);
          });
        });
      }

      function _filter(row) {
        var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
        row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
      }

      return {
        init: function() {
          var inputs = document.getElementsByClassName('light-table-filter');
          Arr.forEach.call(inputs, function(input) {
            input.oninput = _onInputEvent;
          });
        }
      };
    })(Array.prototype);

    document.addEventListener('readystatechange', function() {
      if (document.readyState === 'complete') {
        LightTableFilter.init();
      }
    });

  })(document);

