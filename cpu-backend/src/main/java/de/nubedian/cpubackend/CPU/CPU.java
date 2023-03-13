package de.nubedian.cpubackend.CPU;

import de.nubedian.cpubackend.Socket.Socket;
import jakarta.persistence.*;

import java.util.List;


@Entity
@Table(name = "cpustable")
public class CPU {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String brand;
    private String model;

    private double clockspeed;
    private String clockspeedUnit;
    private int cores;
    private int threads;
    private int tdp;
    private double price;
    private String buyLink;
    @ManyToOne
    @JoinColumn(name = "socket_id")
    private Socket socket;


    public CPU() {

    }

    public CPU(String brand, String model, double clockspeed, String clockspeedUnit, int cores, int threads, int tdp, double price, String buyLink) {

        this.brand = brand;
        this.model = model;
        this.clockspeed = clockspeed;
        this.clockspeedUnit = clockspeedUnit;
        this.cores = cores;
        this.threads = threads;
        this.tdp = tdp;
        this.price = price;
        this.buyLink = buyLink;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }




    public double getClockspeed() {
        return clockspeed;
    }

    public void setClockspeed(double clockspeed) {
        this.clockspeed = clockspeed;
    }

    public String getClockspeedUnit() {
        return clockspeedUnit;
    }

    public void setClockspeedUnit(String clockspeedUnit) {
        this.clockspeedUnit = clockspeedUnit;
    }

    public int getCores() {
        return cores;
    }

    public void setCores(int cores) {
        this.cores = cores;
    }

    public int getThreads() {
        return threads;
    }

    public void setThreads(int threads) {
        this.threads = threads;
    }

    public int getTdp() {
        return tdp;
    }

    public void setTdp(int tdp) {
        this.tdp = tdp;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getBuyLink() {
        return buyLink;
    }

    public void setBuyLink(String buyLink) {
        this.buyLink = buyLink;
    }

    public Socket getSocket() {
        return socket;
    }

    public void setSocket(Socket socket) {
        this.socket = socket;
    }

    @Override
    public String toString() {
        return "CPU{" +
                "id=" + id +
                ", brand='" + brand + '\'' +
                ", model='" + model + '\'' +
                ", clockspeed=" + clockspeed +
                ", clockspeedUnit='" + clockspeedUnit + '\'' +
                ", cores=" + cores +
                ", threads=" + threads +
                ", tdp=" + tdp +
                ", price=" + price +
                ", buyLink='" + buyLink + '\'' +
                ", socket=" + socket +
                '}';
    }
}
