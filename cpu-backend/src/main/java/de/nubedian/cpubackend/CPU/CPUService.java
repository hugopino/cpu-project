package de.nubedian.cpubackend.CPU;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class CPUService {
    @Autowired
    private CPURepository cpuRepository;

    public List<CPU> listAllCPU() {
        return cpuRepository.findAll();
    }
    public void saveCPU(CPU cpu) {
        cpuRepository.save(cpu);
    }
    public CPU getCPU(Integer id) {
        return  cpuRepository.findById(id).get();
    }
    public void deleteCPU(Integer id) {
        cpuRepository.deleteById(id);
    }
}
