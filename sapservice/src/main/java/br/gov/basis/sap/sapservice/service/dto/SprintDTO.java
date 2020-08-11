package br.gov.basis.sap.sapservice.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class SprintDTO {

    private Integer id;

    private String nome;

    private LocalDate dataInicio;

    private LocalDate dataTermino;

    private Double pontosFuncao;

    private String impedimento;

    private Integer prazo;

    private Integer idStatus;

    private Integer idOrdemServico;

}
