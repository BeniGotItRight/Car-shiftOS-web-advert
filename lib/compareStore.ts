import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { VehiclePublic } from "@/lib/api";

interface CompareStore {
  vehicles: VehiclePublic[];
  isDrawerOpen: boolean;
  addVehicle: (vehicle: VehiclePublic) => void;
  removeVehicle: (vehicleId: number) => void;
  clearVehicles: () => void;
  setDrawerOpen: (isOpen: boolean) => void;
}

export const useCompareStore = create<CompareStore>()(
  persist(
    (set, get) => ({
      vehicles: [],
      isDrawerOpen: false,
      addVehicle: (vehicle) => {
        const currentVehicles = get().vehicles;
        if (currentVehicles.length < 3 && !currentVehicles.some(v => v.id === vehicle.id)) {
          set({ vehicles: [...currentVehicles, vehicle], isDrawerOpen: true });
        }
      },
      removeVehicle: (vehicleId) => {
        set({ vehicles: get().vehicles.filter(v => v.id !== vehicleId) });
      },
      clearVehicles: () => {
        set({ vehicles: [], isDrawerOpen: false });
      },
      setDrawerOpen: (isOpen) => {
        set({ isDrawerOpen: isOpen });
      }
    }),
    {
      name: "shiftos-compare-storage",
    }
  )
);
