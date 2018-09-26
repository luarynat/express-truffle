 pragma solidity ^0.4.24;

///smart contrtact para declaracion patrimonial
contract Declaration {
    
    struct Person {
        string RFC;
        string declaracion; //interes
        string ano;
        string tipo;//inicial, final,conclusion-inicial,anual, complementartia
        string hashDoc;
        uint index;
    }
    
    mapping(address => Person) private perStructs;
    address[] private perIndex;
    
    function setDeclaration (address perAddress,string _RFC,string _declaracion, string _ano, string _tipo, string _hashDoc) public returns (uint index){
         
        perStructs[perAddress].RFC  = _RFC;
        perStructs[perAddress].declaracion = _declaracion;
        perStructs[perAddress].ano = _ano;
        perStructs[perAddress].tipo = _tipo;
        perStructs[perAddress].hashDoc = _hashDoc;
        perStructs[perAddress].index   = perIndex.push(perAddress)-1;
        return perIndex.length-1;
    }
    

    function getDeclaration (address perAddress) public constant returns(address, string, string, string, string, string){
        
    return( perAddress,
        perStructs[perAddress].RFC,
        perStructs[perAddress].declaracion,
        perStructs[perAddress].ano,
        perStructs[perAddress].tipo,
        perStructs[perAddress].hashDoc );
    }
}