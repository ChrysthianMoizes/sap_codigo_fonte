package br.gov.basis.sap.sapservice.domain;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class Sprint {

    private Integer id;

    private String nome;

    private LocalDate dataInicio;

    private LocalDate dataTermino;

    private Double pontosFuncao;

    private String impedimento;

    private Integer prazo;

    private TipoStatus status;

    private OrdemServico ordemServico;

}
