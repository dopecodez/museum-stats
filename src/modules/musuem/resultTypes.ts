export interface visitorStats {
  month?: string;
  year?: number;
  highest?: museumVistorStats;
  lowest?: museumVistorStats;
  ignored?: museumVistorStats;
  total?: number;
}

export interface museumVistorStats {
    museum: string;
    visitors: number;
}
