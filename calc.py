def estimate_ssd_lifespan(data_written_tb, percentage_used, daily_write_gb):
    """
    Estimate the lifespan of an SSD based on data written, percentage used, and daily write rate.

    Parameters:
    data_written_tb (float): The amount of data written to the SSD in terabytes.
    percentage_used (float): The percentage of the SSD's life that has been used.
    daily_write_gb (float): The average amount of data written to the SSD per day in gigabytes.

    Returns:
    dict: A dictionary containing the estimated total lifespan, remaining lifespan in TB, days, and years.
    """
    # Convert daily write rate from GB to TB
    daily_write_tb = daily_write_gb / 1024

    # Calculate the estimated total lifespan in TB
    estimated_total_lifespan_tb = data_written_tb / (percentage_used / 100)

    # Calculate the remaining lifespan in TB
    remaining_lifespan_tb = estimated_total_lifespan_tb - data_written_tb

    # Calculate the remaining lifespan in days
    remaining_lifespan_days = remaining_lifespan_tb / daily_write_tb

    # Calculate the remaining lifespan in years
    remaining_lifespan_years = remaining_lifespan_days / 365

    return {
        "estimated_total_lifespan_tb": estimated_total_lifespan_tb,
        "remaining_lifespan_tb": remaining_lifespan_tb,
        "remaining_lifespan_days": remaining_lifespan_days,
        "remaining_lifespan_years": remaining_lifespan_years
    }

# Example usage
data_written_tb = 17.2  # Data Units Written in TB
percentage_used = 4  # Percentage Used
daily_write_gb = 10  # Average Daily Data Write in GB

lifespan_estimate = estimate_ssd_lifespan(data_written_tb, percentage_used, daily_write_gb)

print("Estimated Total Lifespan (TB):", lifespan_estimate["estimated_total_lifespan_tb"])
print("Remaining Lifespan (TB):", lifespan_estimate["remaining_lifespan_tb"])
print("Remaining Lifespan (Days):", lifespan_estimate["remaining_lifespan_days"])
print("Remaining Lifespan (Years):", lifespan_estimate["remaining_lifespan_years"])