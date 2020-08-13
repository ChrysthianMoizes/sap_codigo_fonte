package br.gov.basis.sap.sapservice.repository;

import br.gov.basis.sap.sapservice.domain.Lider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface LiderRepository extends JpaRepository<Lider, Integer> {
    @Query("SELECT l FROM Lider l WHERE l.nome = :nome")
    Lider buscarPorNome(@Param("nome") String nome);
}
