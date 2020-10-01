package br.gov.basis.sap.sapservice.builder;

import br.gov.basis.sap.sapservice.domain.Cliente;
import br.gov.basis.sap.sapservice.repository.ClienteRepository;
import br.gov.basis.sap.sapservice.service.mapper.ClienteMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.util.Collection;

@Component
public class ClienteBuilder extends  ConstrutorDeEntidade <Cliente> {
@Autowired
    private ClienteRepository clienteRepository;

@Autowired
private ClienteMapper clienteMapper;

    @Override
    protected Cliente construirEntidade() throws ParseException {
        Cliente cliente =new Cliente();
        cliente.setDescricao("Governo");
        return cliente;
    }

    @Override
    protected Cliente persistir(Cliente entidade) {
        return clienteRepository.save(entidade);
    }

    @Override
    protected Cliente obterPorId(Long id) {
        return null;
    }

    @Override
    protected Collection<Cliente> obterTodos() {
        return null;
    }
}
