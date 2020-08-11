package br.gov.basis.sap.sapservice.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Projeto {

    private Integer id;

    private String nome;

    private Lider lider;

    private Cliente cliente;

    private String testador;

    private String revisor;

    private String gerente;

}
