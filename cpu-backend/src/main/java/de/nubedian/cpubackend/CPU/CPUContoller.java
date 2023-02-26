package de.nubedian.cpubackend.CPU;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/v1/cpu")
public class CPUContoller {
    @Autowired
    CPUService cpuService;

    @GetMapping("")
    public List<CPU> list() {
        return cpuService.listAllCPU();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CPU> get(@PathVariable Integer id) {
        try {
            CPU cpu = cpuService.getCPU(id);
            return new ResponseEntity<CPU>(cpu, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<CPU>(HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("")
    public void add(@RequestBody CPU cpu) {
        cpuService.saveCPU(cpu);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody CPU cpu, @PathVariable Integer id) {
        try {
            CPU exisCpu = cpuService.getCPU(id);
            cpu.setId(id);
            cpuService.saveCPU(cpu);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }


    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        cpuService.deleteCPU(id);
    }

}











