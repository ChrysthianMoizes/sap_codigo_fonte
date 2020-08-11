package br.gov.basis.sap.sapservice.domain;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class OrdemServico {

    private Integer id;

    private String nome;

    private Projeto projeto;

    private TipoSituacao situacao;

    private String contato;

    private LocalDate dataProximaEntrega;

    private Integer qtdDefeitosCliente;

    private Integer qtdDefeitosInterno;

    private LocalDate prazo;

    private Double pontosFuncao;

    private String fabricas;

}
