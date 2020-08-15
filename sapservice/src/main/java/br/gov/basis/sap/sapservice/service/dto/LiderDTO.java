package br.gov.basis.sap.sapservice.service.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
public class LiderDTO {
    private Integer id;
    @NotNull
    private String nome;
    @Size(max = 100)
    private String contato;
}
