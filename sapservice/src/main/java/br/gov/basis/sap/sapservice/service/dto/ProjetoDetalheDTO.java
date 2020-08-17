package br.gov.basis.sap.sapservice.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ProjetoDetalheDTO {
    private Integer id;
    private String descricao;
    private Long qtdOsExecucao; //soma dos pontos de função de todas as OS dentro do projeto
    private Double qtdPtsFuncaoExec; //pontos de função na OS
    private Boolean  defeitosCliente; //
    private Boolean impedimento; // se possui sprint com impedimento

    public ProjetoDetalheDTO(Integer id, String descricao, Long qtdOsExecucao, Double qtdPtsFuncaoExec, Boolean defeitosCliente, Boolean impedimento) {
        this.id = id;
        this.descricao = descricao;
        this.qtdOsExecucao = qtdOsExecucao;
        this.qtdPtsFuncaoExec = qtdPtsFuncaoExec;
        this.defeitosCliente = defeitosCliente;
        this.impedimento = impedimento;
    }

    public ProjetoDetalheDTO(String descricao, Long qtdOsExecucao, Double qtdPtsFuncaoExec) {
        this.descricao = descricao;
        this.qtdOsExecucao = qtdOsExecucao;
        this.qtdPtsFuncaoExec = qtdPtsFuncaoExec;
    }
}
