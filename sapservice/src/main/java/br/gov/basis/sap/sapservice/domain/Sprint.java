package br.gov.basis.sap.sapservice.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "sprint")
public class Sprint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "data_inicio")
    private LocalDate dataInicio;

    @Column(name = "data_termino")
    private LocalDate dataTermino;

    @Column(name = "qtd_pontos_funcao")
    private Double pontosFuncao;

    @Column(name = "impedimento")
    private String impedimento;

    @Column(name = "no_prazo")
    private Integer prazo;

    @ManyToOne()
    @JoinColumn(name = "id_status")
    private TipoStatus status;

    @ManyToOne()
    @JoinColumn(name = "id_ordem_servico")
    private OrdemServico ordemServico;

}
